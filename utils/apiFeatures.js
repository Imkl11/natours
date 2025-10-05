const qs = require('qs');

class ApiFeatures {
    constructor(dbQuery, queryString) {
        this.dbQuery = dbQuery,
            this.queryString = queryString
    }

    filter() {
        const parsed = qs.parse(this.queryString);
        const queryObject = { ...parsed }

        // It is required as sort and page etc these fields are not in documents so if we find page in tour model then it will return empty array
        const excludedFields = ['sort', 'page', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObject[el]);

        //1. ADVANCE FILTERING
        let updatedQuery = JSON.stringify(queryObject).replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        updatedQuery = JSON.parse(updatedQuery);

        this.dbQuery.find(updatedQuery)

        return this
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.dbQuery = this.dbQuery.sort(sortBy) // Parmas should be a string with multiple word with space
        } else {
            this.dbQuery = this.dbQuery.sort('-createdAt')
        }

        return this
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ')
            this.dbQuery = this.dbQuery.select(fields) // Parmas should be a string with multiple word with space
        } else {
            this.dbQuery = this.dbQuery.select('-__v')
        }

        return this
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;
        this.dbQuery = this.dbQuery.skip(skip).limit(limit); 

        return this
    }


}

module.exports = ApiFeatures