import methods from "@/axios/methods";

const apis = {
    user: {
        list: methods.get('/pm/itemGroup/listAll'),
    }
}

export default apis
