require('dotenv').config()
const { raw } = require('mysql2');
const  Sequelize  = require('sequelize');

  //Conexão com o banco de dados mysql

    const sequelize =  new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
        query:{raw:true}

    })


    module.exports={
        Sequelize:Sequelize,
        sequelize:sequelize
    }