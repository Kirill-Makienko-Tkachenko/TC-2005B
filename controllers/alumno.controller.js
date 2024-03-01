const pool = require('../helpers/mysql-helper.js');

const getAlumno = (req, res) => {
    pool.query('SELECT * FROM alumno', (err, rows, fields) => {
        if (err) {
            res.json({
                "message": "Error en la base de datos",
                "error": err
            })
        } else {
            res.json(rows)
        }
    })
}

const updateAlumno = (req,res) => {

    const { id, nombre, paterno, materno, nacimiento } = req.body
    //Validar que el body tiene los atributos necesarios
    pool.query(`UPDATE alumno SET nombre=?, paterno=?, 
                    materno=?, nacimiento=? WHERE id=?`, [id, nombre, paterno, materno, nacimiento], (err, rows, fields) => {
        if (err) {
            res.json({
                "message": "Error en la base de datos",
                "error": err
            })
        } else {
            res.json(rows)
        }
    })
}

const saveAlumno = (req,res) => {
    const { nombre, paterno, materno, nacimiento } = req.body
    //Validar que el body tiene los atributos necesarios
    pool.query(`INSERT INTO alumno (nombre, paterno, materno, nacimiento) VALUES (?, ?, ?, ?)`, [nombre, paterno, materno, nacimiento], (err, rows, fields) => {
        if (err) {
            res.json({
                "message": "Error en la base de datos",
                "error": err
            })
        } else {
            if (rows.affectedRows > 0) {
                res.json({
                    "message": "Alumno guardado"
                })
            } else {
                res.json({
                    "message": "Error al guardar el alumno"
                })
            }
            res.json(rows)
        }
    })
}


module.exports = {
    getAlumno,
    updateAlumno,
    saveAlumno,
}
