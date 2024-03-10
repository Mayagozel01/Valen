import { $authApi } from ".";
export const get_ids = async()=>{
	const response = await $authApi.post('',{
	"action": "get_ids",
	"params": {"offset": 10, "limit": 3}
});
console.log(response)
return response
}
