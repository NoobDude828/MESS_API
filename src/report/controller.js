const pool = require("../../db");
const queries = require("./queries");

const getReport = (req, res) =>{
    pool.query(queries.getReport, (error, results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};  

const getReportById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getReportById, [id], (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addReport = (req, res) => {
    const {item, quantity, rate, grand_total} = req.body;
    //check if item exists 
    pool.query(queries.checkItemExists, [item], (error, results)=>{
        if (results.rows.length){
            res.send("Item already exists.");
        }
        // add item to db
        pool.query(queries.addReport,
            [item, quantity, rate, grand_total],
            (error, results)=>{
            if(error) throw error;
            res.status(201).send("Added Sucessfully!");
        })
    });
};

const removeReport = (req, res) =>{
    const id = parseInt(req.params.id);

    pool.query(queries.getReportById, [id], (error, results)=>{
        const noReportFound = !results.rows.length;
        if (noReportFound){
        res.send("Does not exist in database, could not remove");
        }

        pool.query(queries.removeReport, [id], (error, results)=>{
            if(error)throw error;
            res.status(200).send("Removed succesfully!");
        });
    });
};

const updateReport = (req, res)=>{
    const id = parseInt(req.params.id);
    const {item} = req.body;

    pool.query(queries.getReportById, [id], (error, results)=>{
        const noReportFound = !results.rows.length;
        if (noReportFound){
        res.send("Does not exist in database");
        }

        pool.query(queries.updateReport, [item, id], (error, results)=>{
            if (error) throw error;
            res.status(200).send("Updated Succesfully!");
        });
    });
};

module.exports = {
    getReport,
    getReportById,
    addReport,
    removeReport,
    updateReport,
}