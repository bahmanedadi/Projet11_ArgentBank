export function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password
        })
    };
    return fetchAPI("login", requestOptions)
}

export function getUserProfile(token) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    return fetchAPI("profile", requestOptions);
}

export function updateUserProfile(token, firstName, lastName) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName
        })
    };
    return fetchAPI("profile", requestOptions);
}

async function fetchAPI(url, requestOptions) {
    let result = await fetch(`http://localhost:3001/api/v1/user/${url}`, requestOptions);
    let actualData = await result.json();

    return actualData;
}