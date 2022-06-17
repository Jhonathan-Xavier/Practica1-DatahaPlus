import {Sub, SubsApi} from "../interfaces/types";

export const getAllSubs = () =>{
    return fetchSubs().then(mapSubs)
}
const fetchSubs = (): Promise<SubsApi> =>{
//    return fetch('https://jsonplaceholder.typicode.com/users')
    return fetch('https://dev-api.datumtrack.com/url-builder/v1/url?accountId=20000000100223250000',{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJraWQiOiJ6Y1RTb29Bc1VncmJYSlJUc2dnZ1J1UWFkenUram41d3R4UENzcUw5VE8wPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3YjI2M2YxOC03YzRmLTRlMTYtYTgxZi04ODE5ODIxMzRhY2YiLCJjb2duaXRvOmdyb3VwcyI6WyJEYXR1bUFkbWluIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0FYdlVEYlR1ciIsImNsaWVudF9pZCI6IjRiMzk2aHFrZDBmOWpnMjk3cnNtMW8xZmoiLCJvcmlnaW5fanRpIjoiYjMyMjk1NWQtNjJmNS00MjFkLTk5OWEtYWQ1MDRiYmMzNWMwIiwiZXZlbnRfaWQiOiI1OTBhMzk0Ni01MTRmLTRmZjktOThjNy02OTQ0YjNkZmU0MjYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjU1NDE3NDY3LCJleHAiOjE2NTU0NDYyNjYsImlhdCI6MTY1NTQxNzQ2NywianRpIjoiNWNmN2E0YjgtMGQ5Mi00NThhLWEyNmItMDNjYzAxMzE1ZWEwIiwidXNlcm5hbWUiOiJkZXYifQ.SGNcJIl-IwvSbxZ74nnsHJ3g7j9nHZfpTvcSOqybP9Q8ktNWOcV8iUoyMscMnNwNaprjUdzu9Nry2tpkwV_gbveWPfZ5VZ9FfwXfdabdE9FGEcboqxsmBhVbfSz0texAXl0oubbP2c4nYGyFvsh-G2OwCviwzjRAD10BjQaJUZrJzkWVIwsXI77KWxjEtIunj4mdqURQSYygVDzRIQdSHTIVr0Q7MdL5cjJeKC3DjvZmmIHTA574HboM9DOIunv2CENXMT5glYHi2TW3wot-aM78iWMWtUP-XNLUlaFYjt7TKsTkhoWpuF0AX0qG2L4O2xffIoOdf0uN36KsQWOlbg',
        },
    })
        .then(res => res.json())
}

const mapSubs = (apiResponse: SubsApi):
    Array<Sub> => {
    return apiResponse.map(subFromApi =>{
        const {
            utm_mediu: nick,
            utm_term: description,
            accountId: subMonth
        } = subFromApi;

        return {
            nick,
            subMonth,
            description
        }
    })
}
