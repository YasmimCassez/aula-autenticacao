// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA

import { Request, Response } from 'express';
import { DatabaseModel } from './model/DatabaseModel';

const database = new DatabaseModel().pool;

export class Consultas {

    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            return res.json((await database.query(`SELECT * FROM pessoa;`)).rows);
        } catch (error) {
            console.error(`Erro no modelo: ${error}`);
            return res.json({ mensagem: `Erro no modelo: ${error}`});
        }
    }
}


// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA
// MÃO UTILIZAR ASSIM, ESTE JEITO ESDRUCHULO É SÓ PARA EXEMPLO EM SALA DE AULA