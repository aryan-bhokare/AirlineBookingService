const { BookingService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
const { ServiceError } = require('../utils/errors');

const bookingService = new BookingService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            data : response,
            err: {},
            message : 'Successfully completed booking',
            success : true
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            data : {},
            err: error.explanation,
            message : error.message,
            success : false
        })
    }
}
 
module.exports = {
    create
}