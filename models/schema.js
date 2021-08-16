class PgSchema {
    constructor(table, definition) {
        this.table = table;

        for (let key in definition) {
            this[key] = definition[key];
        }
    }

    create(data) {
        let valid = this.validate(data);

        if (valid) {
            let columns = Object.keys(data).join(', ');
            let values = Object.values(data).join(", ");
            return `INSERT INTO ${this.table} (${columns}) VALUES (${values})`;

        } else {
            return false;
        }
    }

    read() {
        return `SELECT * FROM ${this.table}`;
    }
    
    validate(data) {
        let error = false;
        let columns = {...this};
        delete columns.table;

        for (let key in columns) {
            if (!data[key] || typeof data[key] !== columns[key].type) {
                error = true;
                break;
            }
        }

        for (let key in data) {
            if (!columns[key]) {
                error = true;
                break;
            }
        }

        return !error;
    }
}


let conf = {
    login: { type: 'string' },
    password: { type: 'string' },
};

let schema = new PgSchema('test', conf);

console.log(schema);
// export default PgSchema;