import { Table, StringColumn, BooleanColumn, ChoiceColumn } from '@servicenow/sdk/core';

export const x_471120_qatemp_question = Table({
    name: 'x_471120_qatemp_question',
    label: 'Question',
    display: 'question',
    extensible: true,
    schema: {
        question: StringColumn({
            label: 'Question',
            maxLength: 400,
            mandatory: true,
        }),
        answer: StringColumn({
            label: 'Answer',
            maxLength: 400,
        }),
        type: ChoiceColumn({
            label: 'Type',
            choices: {
                normal: 'Normal',
                '1234': '1234',
            },
        }),
        media_type: ChoiceColumn({
            label: 'Media Type',
            choices: {
                image: 'Image',
                audio: 'Audio',
                video: 'Video',
            },
        }),
        filename: StringColumn({
            label: 'Filename',
            maxLength: 400,
        }),
        difficulty: ChoiceColumn({
            label: 'Difficulty',
            choices: {
                1: 'Easy',
                2: 'Medium',
                3: 'Hard',
            },
        }),
        fullscreen: BooleanColumn({
            label: 'Fullscreen',
            default: false,
        }),
    },
});