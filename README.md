```Date Formatter Package```

This package provides simple date utilities to format dates and calculate relative times. With functions like timeAgo, tomorrow, and yesterday, you can easily format dates, calculate relative time differences, and handle commonly used date manipulations.

INSTALLATION
To install this package, use npm (or yarn):

`npm install date-formatter-package`
or
`yarn add date-formatter-package`


USAGE

Import the package in your JavaScript or TypeScript file:

`const { timeAgo, tomorrow, yesterday } = require('date-formatter-package');`


Functions

1. timeAgo(date, options)

    Calculates the time difference between a given date and the current date, displaying the result in days or a relative format. This function is useful for creating "time ago" messages, like "2 days ago" or "5 hours ago."

    Parameters
        date : The date you want to calculate the time difference for. Can be a Date object, an ISO date string, or a timestamp.
        options (object):   
            onlyDays (boolean): If true, the result will be in days only, e.g., {days:3}. Otherwise, it will include years in the result as well. e.g., {years : 2 , days: 98}
            DEFAULT : FALSE
            

    Example
    
    `const date = new Date('2023-11-02');`
    `console.log(timeAgo(date)); // Output: {years : 1 , days : 3} (example output, will vary on the current date of course)`
    `console.log(timeAgo(date, { onlyDays: true })); // Output: {days : 3} `

2. yesterday()

    returns a date object for the date, just before today (yesterday)

3. tomorrow()

    returns a date object for the date, just after today (tomorrow)