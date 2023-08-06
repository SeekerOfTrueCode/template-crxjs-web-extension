export function parseVersion(version: string) {
    // Convert from Semver (example: 0.1.0-beta6)
    const [major, minor, patch, label = '0'] = version
        // can only contain digits, dots, or dash
        .replace(/[^\d.-]+/g, '')
        // split into version parts
        .split(/[.-]/)

    return [major, minor, patch, label]
}