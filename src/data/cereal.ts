export interface Cereal {
    id: number;
    name: string;
    manufacturer: CerealManufacturer;
    flavor: CerealFlavor;
    type: CerealType;
}

enum CerealType {
    Rice = 'rice',
    Wheat = 'wheat',
    Corn = 'corn',
}

enum CerealFlavor {
    Sweet = 'sweet',
    Savory = 'savory',
    Fruity = 'fruity',
}

enum CerealManufacturer {
    GeneralMills = 'General Mills',
    Kelloggs = 'Kelloggs',
    Post = 'Post',
    Quaker = 'Quaker',
    MaltOMeal = 'Malt-O-Meal',
    Kashi = 'Kashi',
    NatureValley = 'Nature Valley',
    CascadianFarm = 'Cascadian Farm',
}
