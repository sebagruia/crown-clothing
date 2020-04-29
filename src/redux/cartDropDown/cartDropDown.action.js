export const HIDE_REVEAL_DROPDOWN = 'HIDE_REVEAL_DROPDOWN';
export const ADD_ITEM = 'ADD_ITEM';

export const hideRevealDropDownAction = boolean=>{
        return {
            type:HIDE_REVEAL_DROPDOWN,
            payload:!boolean
        }
   
};

export const addItemAction = (item)=>{
    return{
        type:ADD_ITEM,
        payload:item

    }
        
}

