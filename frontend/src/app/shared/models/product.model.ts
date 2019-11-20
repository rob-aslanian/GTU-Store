export interface IProduct {
        
        title?:       string
        description?: string
        price?:       string
        category_id?: string
        images?:      Blob[] | any              
};

export interface IProductDetailed  extends IProduct {
        
        created_at?:   string
        id?:           string
        updated_at?:   string
        user_id?:      number
        isSelect?:     boolean

}