// const fs = require('fs');
const Tour = require('../models/tourModels');
// const qs = require('qs');
const ApiFeatures = require('../utils/apiFeatures.js');

// USING FILE SYSYTEM AND UPDATING A TEXT FILE

// app.get('/api/v1/tours', (req, res) => {
//     // console.log('Hello calling from server 🙏')
//     // res.status(200).send('Hello calling from server 🙏')
//     fs.readFile(`${__dirname}/tours.txt`, "utf-8", ( err, data) => {
//         if (err) {
//             res.status(500).json({ status: 'fail', message : 'error ocurred while fetching records'})
//         } else {
//             let message = JSON.parse(data).length > 0 ? 'tours retrived successfully' : 'no tours found';
//             res.status(200).json({ status: 'success', message, data: JSON.parse(data), length : JSON.parse(data).length })
//         }
//     })

// })

// app.post('/api/v1/tours', (req, res) => {
//     const body = req.body;

//     fs.readFile(`${__dirname}/tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const updatedTours = [...JSON.parse(data), body]
//             fs.writeFile('tours.txt', JSON.stringify(updatedTours), (err) => {
//                 res.status(201).json({ status: 'success', message: 'created sucessfully', data: updatedTours })
//             })
//         }
//     })


// })

// app.patch('/api/v1/tours/:id', (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     fs.readFile(`${__dirname}/tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const tour = JSON.parse(data).find((t) => t.id === id * 1);
//             if (tour) {
//                 const updatedTours = JSON.parse(data).map((td) => {
//                     if (td.id === id * 1) {
//                         return {
//                             ...td,
//                             ...body
//                         }
//                     } else {
//                         return td
//                     }
//                 })
//                 fs.writeFile(`${__dirname}/tours.txt`, JSON.stringify(updatedTours), (error) => {
//                     if (error) {
//                         res.status(500).json({ status: 'fail', message: 'tour update failed' })
//                     } else {
//                         res.status(200).json({ status: 'success', message: 'tour update successful', data: tour })
//                     }
//                 })
//             } else {
//                 res.status(404).json({ status: 'fail', message: 'tour not found', data: tour })
//             }
//         }
//     })
// })

// app.delete('/api/v1/tours/:id', (req, res) => {
//     const { id } = req.params;
//     fs.readFile(`${__dirname}/tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const tour = JSON.parse(data).find((t) => t.id === id * 1);
//             if (tour) {
//                 const updatedTours = JSON.parse(data).filter((td) => td.id !== (id * 1))
//                 fs.writeFile(`${__dirname}/tours.txt`, JSON.stringify(updatedTours), (error) => {
//                     if (error) {
//                         res.status(500).json({ status: 'fail', message: 'tour delete failed' })
//                     } else {
//                         res.status(200).json({ status: 'success', message: 'tour deleted successful' })
//                     }
//                 })
//             } else {
//                 res.status(404).json({ status: 'fail', message: 'tour not found', data: tour })
//             }
//         }
//     })
// })

// exports.checkId = (req, res, next, val) => {
//     fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).json({ status: 'fail', message: 'error reading file' });
//         }

//         const tours = JSON.parse(data);
//         const tour = tours.find((t) => t.id === val * 1);

//         if (!tour) {
//             return res.status(404).json({
//                 status: 'fail',
//                 message: 'invalid id'
//             });
//         }

//         // If ID is valid, proceed to the next middleware/controller
//         next();
//     })

// }

// exports.checkBody = (req, res, next) => {
//     const body = req.body;
//     if (!('name' in body)) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'incorrect data format'
//         })
//     }

//     next()
// }

// exports.getAllTours = (req, res) => {
//     fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             let message = JSON.parse(data).length > 0 ? 'tours retrived successfully' : 'no tours found';
//             return res.status(200).json({ status: 'success', message, data: JSON.parse(data), length: JSON.parse(data).length })
//         }
//     })
// }

// exports.creatTour = (req, res) => {
//     const body = req.body;

//     fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const updatedTours = [...JSON.parse(data), body]
//             fs.writeFile('tours.txt', JSON.stringify(updatedTours), (err) => {
//                 return res.status(201).json({ status: 'success', message: 'created sucessfully', data: updatedTours })
//             })
//         }
//     })
// }

// exports.updateTour = (req, res) => {
//     const { id } = req.params;
//     const body = req.body;
//     fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const updatedTours = JSON.parse(data).map((td) => {
//                 if (td.id === id * 1) {
//                     return {
//                         ...td,
//                         ...body
//                     }
//                 } else {
//                     return td
//                 }
//             })
//             fs.writeFile(`${__dirname}/../tours.txt`, JSON.stringify(updatedTours), (error) => {
//                 if (error) {
//                     return res.status(500).json({ status: 'fail', message: 'tour update failed' })
//                 } else {
//                     return res.status(200).json({ status: 'success', message: 'tour update successful', data: tour })
//                 }
//             })
//         }
//     })
// }

// exports.deleteTour = (req, res) => {
//     const { id } = req.params;
//     fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
//         } else {
//             const updatedTours = JSON.parse(data).filter((td) => td.id !== (id * 1))
//             fs.writeFile(`${__dirname}/../tours.txt`, JSON.stringify(updatedTours), (error) => {
//                 if (error) {
//                     return res.status(500).json({ status: 'fail', message: 'tour delete failed' })
//                 } else {
//                     return res.status(200).json({ status: 'success', message: 'tour deleted successful' })
//                 }
//             })
//         }
//     })
// }


// USING DB SYSTEM FOR CRUD OPERATIONS
exports.getAllTours = async (req, res) => {
    try {
        // const parsed = qs.parse(req.query);
        // const queryObject = {...parsed}

        // // It is required as sort and page etc these fields are not in documents so if we find page in tour model then it will return empty array
        // const excludedFields = ['sort', 'page', 'limit', 'fields']; 
        // excludedFields.forEach(el => delete queryObject[el]);

        // //1. FILTERING
        // let updatedQuery = JSON.stringify(queryObject).replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        // updatedQuery = JSON.parse(updatedQuery);

        // let mongooseQuery = Tour.find(updatedQuery)
        
        //2. SORTING
        // if (req.query.sort) {
        //     const sortBy = req.query.sort.split(',').join(' ')
        //     mongooseQuery = mongooseQuery.sort(sortBy) // Parmas should be a string with multiple word with space
        // } else {
        //     mongooseQuery = mongooseQuery.sort('-createdAt') 
        // }

        //3. FIELD LIMTING
        // if (req.query.fields) {
        //     const fields = req.query.fields.split(',').join(' ')
        //     mongooseQuery = mongooseQuery.select(fields) // Parmas should be a string with multiple word with space
        // } else {
        //     mongooseQuery = mongooseQuery.select('-__v') 
        // }

        //4. PAGINATION

        // const page = req.query.page * 1 || 1;
        // const limit = req.query.limit * 1 || 10;
        // const skip = (page-1) * limit;
        // if (req.query.page) {
        //     const countTours =  await Tour.countDocuments();
        //     if (skip >= countTours) throw new Error("This page doesn't exist");
        // }

        // mongooseQuery = mongooseQuery.skip(skip).limit(limit); 
        // const tour = await mongooseQuery;

        const apiFeatures = new ApiFeatures(Tour.find(), req.query).filter().sort().limitFields().paginate()

        const tour = await apiFeatures.dbQuery;
        res.status(200).json({
            status: 'success',
            data: tour,
            result: tour.length
        })
    } catch (error) {
         return res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getTour = async (req, res) => {
    try {
        const { id } =  req.params;
        const tour = await  Tour.findById({ _id : id });
        res.status(200).json({
            status: 'success',
            data: tour,
            result: tour.length
        })
    } catch (error) {
         return res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}

exports.creatTour = async(req, res) => {
    const body = req.body;
    try {
        const newTour = await Tour.create(body);
        return res.status(201).json({
            status: 'success',
            data: newTour
        })
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.updateTour = async(req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedTour = await Tour.findByIdAndUpdate({ _id : id}, body , {
            new : true,
            runValidators : true
        })
        return res.status(200).json({
            status: 'success',
            data: updatedTour
        })
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            message: error
        })
    }
   
    
}

exports.deleteTour = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTour = await Tour.findByIdAndDelete({ _id : id })
        return res.status(204).json({
            status: 'success',
            data: deletedTour
        })
    } catch (error) {
        return res.status(404).json({
            status: 'fail',
            message: error
        })
    }

}