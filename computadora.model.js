import mongoose from 'mongoose';

const computadoraSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    detalle: {
        type: [String],
        required: false
    }
});

const Computadora = mongoose.model('Computadora', computadoraSchema);
export default Computadora;
