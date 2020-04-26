export const HIDE_REVEAL_DROPDOWN = 'HIDE_REVEAL_DROPDOWN';

export const hideRevealDropDownAction = boolean=>{
        return {
            type:HIDE_REVEAL_DROPDOWN,
            payload:!boolean
        }
   
};

