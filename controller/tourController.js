const fs = require('fs');


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

exports.checkId = (req, res, next, val) => {
    fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'fail', message: 'error reading file' });
        }

        const tours = JSON.parse(data);
        const tour = tours.find((t) => t.id === val * 1);

        if (!tour) {
            return res.status(404).json({
                status: 'fail',
                message: 'invalid id'
            });
        }

        // If ID is valid, proceed to the next middleware/controller
        next();
    })

}

exports.checkBody = (req, res, next) => {
    const body = req.body;
    if (!('name' in body)) {
        return res.status(400).json({
            status: 'fail',
            message: 'incorrect data format'
        })
    }

    next()
}

exports.getAllTours = (req, res) => {
    fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
        } else {
            let message = JSON.parse(data).length > 0 ? 'tours retrived successfully' : 'no tours found';
            return res.status(200).json({ status: 'success', message, data: JSON.parse(data), length: JSON.parse(data).length })
        }
    })
}

exports.creatTour = (req, res) => {
    const body = req.body;

    fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
        } else {
            const updatedTours = [...JSON.parse(data), body]
            fs.writeFile('tours.txt', JSON.stringify(updatedTours), (err) => {
                return res.status(201).json({ status: 'success', message: 'created sucessfully', data: updatedTours })
            })
        }
    })
}

exports.updateTour = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
        } else {
            const updatedTours = JSON.parse(data).map((td) => {
                if (td.id === id * 1) {
                    return {
                        ...td,
                        ...body
                    }
                } else {
                    return td
                }
            })
            fs.writeFile(`${__dirname}/../tours.txt`, JSON.stringify(updatedTours), (error) => {
                if (error) {
                    return res.status(500).json({ status: 'fail', message: 'tour update failed' })
                } else {
                    return res.status(200).json({ status: 'success', message: 'tour update successful', data: tour })
                }
            })
        }
    })
}

exports.deleteTour = (req, res) => {
    const { id } = req.params;
    fs.readFile(`${__dirname}/../tours.txt`, "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({ status: 'fail', message: 'error ocurred while fetching records' })
        } else {
            const updatedTours = JSON.parse(data).filter((td) => td.id !== (id * 1))
            fs.writeFile(`${__dirname}/../tours.txt`, JSON.stringify(updatedTours), (error) => {
                if (error) {
                    return res.status(500).json({ status: 'fail', message: 'tour delete failed' })
                } else {
                    return res.status(200).json({ status: 'success', message: 'tour deleted successful' })
                }
            })
        }
    })
}