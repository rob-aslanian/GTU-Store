export interface IProduct {
        
        title?:       string
        description?: string
        price?:       string
        category_id?: string
        images?:      Blob[]              
};

export interface IProductDetailed  extends IProduct {
        
        created_at:   string
        id:           number
        updated_at:   string
        user_id:      number

}