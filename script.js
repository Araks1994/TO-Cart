new Vue(
{
    el:"#shop",
    data:{
        anun:"Volodya",
        lezuner:["hayeren","ruseren","angleren"],
        apranqner:[
                {quantity:1, name:"matit",price:300,count:20,photo:"https://cdn.shopify.com/s/files/1/0147/3124/7680/products/BlackwingHorizontalWeb_1024x1024.png?v=1550278057"},
                {quantity:1, name:"grich",price:200,count:30,photo:"https://appelboom.com/image/cache/catalog/Pelikan/souveran/Streseman/pelikan-souveran-M605-stresemann-fountain-pen-1074x1074.jpg"},
                {quantity:1, name:"qanon",price:250,count:15,photo:"https://www.goldstartool.com/picts/products/tnw900-gs-12a.jpg"},
                {quantity:1, name:"tetr",price:120,count:10,photo:"http://www.letshavefunwithenglish.com/vocabulary/school_things/images/copybook.jpg"},
                {quantity:1, name:"book",price:3000,count:6,photo:"https://images-na.ssl-images-amazon.com/images/I/414JY2ioyCL.jpg"},
                {quantity:1, name:"karkin",price:450,count:4,photo:"https://www.turningcircles123.com/wp-content/uploads/2018/04/P1010380.jpg"},

        ],
        zambyux:[],


    },
    methods:{
        arnel:function(obj){
            
           if(this.zambyux.includes(obj) ) {
               
                if( obj.quantity<obj.count){
                    obj.quantity++;
                }

            }
            else{
                obj.quantity=1;
             this.zambyux.push(obj)
            }
            
        },
        avelacnel:function(obj){
            if(obj.quantity<obj.count)
            obj.quantity++;
        },
        pakasecnel:function(obj){
            if(obj.quantity==1){
                let index=this.zambyux.indexOf(obj)
               this.zambyux.splice(index,1)
               
            }
            if(obj.quantity>0){
            obj.quantity--;
            }
           
        }

    }

}
)