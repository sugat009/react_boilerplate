const path=require('path');   

module.exports={
    entry:'./src/app.js',             // the main file in which the actual works are done i.e. osty import 
    output: {                         // path to the output file 
        path:path.join(__dirname,'public'),
        filename:'bundle.js'                //output file name
    },
    mode:'none',                            // production mode or development mode 
    module:{
        rules:[{
            loader:'babel-loader',          // the loader which converts jsx into regular js
            test:/\.js$/,                   // regex for js files
            exclude: /node_modules/,        // instruction to exclude the files inside the node_modules folder
            query:{                         // to handle the compaction error 
                compact:false
            }
        },
        {
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool:'cheap-module-eval-source-map', // gives the actual location of the output and not in bundle.js
    devServer:{                             // to give the webpack dev server the location of public folder to  work 
        contentBase:path.join(__dirname,'public')
    }
};