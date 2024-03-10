import { $authApi } from ".";
export const get_items = async(ids)=>{
    console.log(ids)
	const response = await $authApi.post('',{
        "action": "get_items",
        "params": {"ids": ids}
    });
console.log(response)
return response
}
