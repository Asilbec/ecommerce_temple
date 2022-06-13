import { number } from "prop-types";

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            },
            validation: Rule => Rule.required().min(1)

        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().min(1)

        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',

        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        }
    ]
}