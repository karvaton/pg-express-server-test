import { trysend } from "./trycatch-module.js";
import Table from "../models/table.js";

const users = new Table('users', 'admin');

class LayerControl {
    getAll(req, res) {
        getTableNameById(req).then( login => {
            const layers = new Table(login, "admin");
            trysend(res, () => layers.selectAll());
        });
    }

    create(req, res) {
        getTableNameById(req).then( login => {
            const layers = new Table(login, "admin");
            const post = req.body;
            trysend(res, layers.insert(post));
        });
    }

    remove(req, res) {
        getTableNameById(req).then( login => {
            const layers = new Table(login, "admin");
            const post = req.body;
            trysend(res, layers.delete(post));
        });
    }
}

async function getTableNameById(req) {
    const { id } = req.params;
    const { login } = await users.selectBy("id", id);
    return login;
}

export default new LayerControl();
