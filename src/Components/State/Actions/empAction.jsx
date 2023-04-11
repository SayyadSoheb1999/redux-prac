export const addNewEmp=(empName,empAge,empAdd)=>({
    type:"ADDEMP",
    emp:{
        empName,
        empAge,
        empAdd,
    },
});