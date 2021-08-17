import { trysend } from './trycatch-module.js';
import Table from '../models/table.js';

const users = new Table('users', 'admin');

class UserControl {
    getAll(req, res) {
        trysend(res, () => users.selectAll());
    }

    getOne(req, res) {
        const { id } = req.params;
        trysend(res, () => users.selectBy('id', id));
    }

    create(req, res) {
        const post = req.body;
        trysend(res, () => users.insert(post));
    }
    
    remove(req, res) {
        const post = req.body;
        trysend(res, () => users.delete(post));
    }
}

export default new UserControl;