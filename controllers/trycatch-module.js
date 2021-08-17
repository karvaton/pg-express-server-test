function trysend(res, callback) {
    try {
        callback().then(result => {
            res.status(200).send(result);
        })
    } catch (err) {
        res.status(500);
    }
}

export {
    trysend,
}