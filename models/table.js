import db from "../db/index.js";

class Table {
    constructor(table, schema = 'public') {
        this.table = table;
        this.schema = schema;
    }

    async selectAll() {
        const query = `SELECT * FROM ${this.schema}.${this.table}`;
        const { rows } = await db.query(query);
        return rows;
    }

    async selectBy(name, val) {
        const query = `SELECT * FROM ${this.schema}.${this.table} WHERE ${name} = '${val}'`;
        const { rows } = await db.query(query);
        return rows[0];
    }

    async insert(data) {
        const columns = Object.keys(data).join(", ");
        const values = Object.values(data).join(", ");
        const query = `INSERT INTO ${this.schema}.${this.table} (${columns}) VALUES (${values})`;
        return await db.query(query);
    }

    async delete(name, val) {
        const query = `DELETE FROM ${this.schema}.${this.table} WHERE ${name} = '${val}'`;
        const { rows } = await db.query(query);
        return rows[0];
    }
}

export default Table;