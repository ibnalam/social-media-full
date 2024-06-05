
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const {objectId} = mongoose.Schema


const UserModel = new Schema(
    {
        fName:{
            type: String,
            require: true,
            trim: true,
            text: true
        },
        lName: {
            type: String,
            require: true,
            trim: true,
            text: true
        },
        userName : {
            type: String,
            require: true,
            trim: true,
            unique: true,
            text: true
        },
        email : {
            type: String,
            require: true,
            trim: true,
        },
        password: {
            type: String,
            require: true
        },
        profilePicture : {
            type: String,
            default: ""
        },
        cover : {
            type: String,
            trim: String
        },
        birthMonth : {
            type: Number,
            trim: true,
            require: true
        },
        birthDay : {
            type: Number,
            trim: true,
            require: true
        },
        birthYear : {
            type: Number,
            trim: true,
            require: true
        },
        gender : {
            type: String,
            require: true
        },
        verified : {
            type: Boolean,
            default : false
        },
        friends : [
            {
                type: objectId,
                ref: "usermodel"
            }
        ],
        followers : [
            {
                type: objectId,
                ref: "usermodel"
            }
        ],
        following : [
            {
                type: objectId,
                ref: "usermodel"
            }
        ],
        request : [
            {
                type: objectId,
                ref: "usermodel"
            }
        ],
        search : [
            {
                user :{
                    type : objectId,
                    ref: "usermodel",
                    require: true,
                    text: true
                },
                createdAt: {
                    type: Date,
                    require: true
                }
            }
        ],
        details : {
            bio : {
                type: String,
            },
            otherName : {
                type: String
            },
            job : {
                type: String
            },
            currentCity : {
                type: String
            },
            workPlace : {
                type: String
            },
            coLllage : {
                type: String
            },
            highSchool : {
                type: String
            },
            homeTown : {
                type: String
            },
            relationStatus : {
                type: String,
                enum: [
                    "Single",
                    "in a relationship",
                    "it's Complicated",
                    "married",
                    "Divorced"
                ]
            },
            instagram :{
                type: String,
            }
        },
        savePost : [
            {
                post: {
                    type: objectId,
                    ref : "post"
                },
                saveAt : {
                    type: Date,
                    require: true
                }
            }
        ],
    },
    {
        timestamps : true
    }
)



module.exports = mongoose.model("usermodel", UserModel);