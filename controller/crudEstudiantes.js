import {conectar} from "../model/db_conectar.js";

var crud_estudiantes=({});

crud_estudiantes.leer=(req,res)=>{
    conectar.query('SELECT id_estudiante,Carne,nombres,apellidos,direccion,telefono,genero,email,date_format(fecha_nacimiento,"%Y-%m-%d") as fecha_nacimiento FROM estudiante;',(err,resultado1)=>{
        if(err){
            console.log(err);
        }
    });

    
}

crud_estudiantes.crud=(req,res)=>{
    const btn_agregar = req.body.btn_agregar;
    const btn_modificar = req.body.btn_modificar;
    const btn_eliminar = req.body.btn_eliminar;
    const id = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_email;
    const genero = req.body.txt_genero;
    const fecha_nacimiento = req.body.txt_fecha_nacimiento;

    if(btn_agregar){
        conectar.query('insert into estudiantes SET ?',{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,email:correo_electronico,fecha_nacimiento:fecha_nacimiento,genero:genero},(error,resultado)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_modificar){
        conectar.query('update estudiantes SET ? WHERE id_estudiante=?',[{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,email:correo_electronico,fecha_nacimiento:fecha_nacimiento,genero:genero},id],(error,resultado)=>{
            if(err){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_eliminar){
        conectar.query('delete from estudiantes WHERE id_estudiante=?',id,(error,resultado)=>{
            if(err){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }

};
export {crud_estudiantes}