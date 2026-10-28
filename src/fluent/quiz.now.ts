import { Table, StringColumn, DateColumn } from '@servicenow/sdk/core';

export const x_471120_qatemp_quiz = Table({
    name: 'x_471120_qatemp_quiz',
    label: 'Quiz',
    display: 'name',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 40,
            mandatory: true,
        }),
        number: StringColumn({
            label: 'Number',
            maxLength: 40,
        }),
        date: DateColumn({
            label: 'Date',
        }),
    },
});