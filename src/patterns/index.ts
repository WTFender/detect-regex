export interface Pattern {
    id: string;
    name: string;
    description: string;
    pattern: RegExp;
    category: 'generic' | 'cloud' | 'app';
}

export default [
    {
        id: 'TEST',
        name: 'Test Pattern',
        description: 'Test Pattern',
        category: 'generic',
        pattern: /97029097\d+696359494/,
    },
    {
        id: 'AWS_ACCESS_KEY_ID',
        name: 'AWS Access Key ID',
        description: 'AWS Access Key ID',
        category: 'cloud',
        pattern: /AKIA[0-9A-Z]{16}/,
    }
] as Pattern[];