# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.create([
    {
        alias: 'all',
        name: 'All'
    },
    {
        alias: 'mobile',
        name: 'Mobile'
    },
    {
        alias: 'tv_video',
        name: 'Tv & Video'
    },
    {
        alias: 'computer',
        name: 'Computering'
    },
    {
        alias: 'cameras_camcorders',
        name: 'Cameras & Camcorders'
    },
    {
        alias: 'other',
        name: 'Other'
    }
])