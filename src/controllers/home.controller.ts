export const hello = (request, h) => {
    return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
};