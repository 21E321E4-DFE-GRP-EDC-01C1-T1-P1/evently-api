const address = require('../config/data/models')

class AddressControllers{

    static async read(req,res){
        try{
            const list = await address.Address.findAll()
            return res.status(200).json(list)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async findId(req, res){
        const {id} = req.params
        try{
            const find = await address.Address.findOne({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async create(req, res){
        const newAddress = req.body

        try{
            const insert = await address.Address.create(newAddress)
            return res.status(200).json(insert)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    
    static async update(req, res){
        const {id} = req.params
        const updateAddress = req.body

        try{
            await address.Address.update(updateAddress, {
                where : {
                    id : Number(id)
                }
            })

            const mens =  await address.Address.findOne({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json(mens)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async delete(req, res){
        const {id} = req.params

        try{
            await address.Address.destroy({
                where :{
                    id : Number(id)
                }
            })
            return res.status(200).json({
                message: 'User deleted'
            })

        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async schedule(req, res){
        const {id} = req.params
        try{
            const find = await address.Events.findAll({
                where :{
                    id : Number(id)               
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async scheduleUser(req, res){
        const {id} = req.params
        try{
            const find = await address.User.findAll({
                where :{
                    id : id          
                }
            })
            return res.status(200).json(find)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = AddressControllers