import { cva, type VariantProps } from 'class-variance-authority'

const button = cva('font-medium rounded', {
    variants: {
        color: { blue: 'bg-blue-600 text-white', red: 'bg-red-600 text-white' },
        size: { sm: 'px-3', lg: 'px-6 py-3' },
    }
})