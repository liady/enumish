export default {

    // spec for basic tests
    BASIC: {
        input: ['A', 'B'],
        expectation: {
            'A': 'A',
            'B': 'B'
        }
    },

    // spec for testing with objects
    OBJECTS: {
        input: ['A', 'B', {
            'C': 'c',
            'D': 'd'
        }],
        expectation: {
            'A': 'A',
            'B': 'B',
            'C': 'c',
            'D': 'd'
        }
    },

    // spec for testing overrides
    OVERRIDES: {
        input: ['A', 'B', {
            'C': 'c',
            'D': 'd'
        },
        'C', {
            'A': 'a'
        }],
        expectation: {
            'A': 'a',
            'B': 'B',
            'C': 'C',
            'D': 'd'
        }
    },

    // spec for testing converter function (toLowerCase)
    CONVERTER: {
        input: ['A', 'B', {
            'C': 'c',
            'D': 'd'
        }],
        expectation: {
            'A': 'a',
            'B': 'b',
            'C': 'c',
            'D': 'd'
        }
    }
}