import React, { useReducer, useState } from 'react'

const initialState = {
    name: '',
    establishment_year: '',
    address: {
        building: '',
        street: '',
        city: {
            name: '',
            locality: {
                pinCode: '',
                landmark: ''
            }
        },
        state: '',
        coordinates: {
            latitude: '',
            longitude: ''
        }
    },
    courses_offered: [],
    error: ''
};

function complexReducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.payload.field]: action.payload.value,
                error: ''
            };
        case 'SET_NESTED_FIELD':
            return {
                ...state,
                [action.payload.section]: {
                    ...state[action.payload.section],
                    [action.payload.field]: action.payload.value
                },
                error: ''
            };
        case 'SET_DEEP_NESTED_FIELD':
            return {
                ...state,
                address: {
                    ...state.address,
                    city: {
                        ...state.address.city,
                        locality: {
                            ...state.address.city.locality,
                            [action.payload.field]: action.payload.value
                        }
                    }
                },
                error: ''
            };
        case 'SET_COORDINATES':
            return {
                ...state,
                address: {
                    ...state.address,
                    coordinates: {
                        ...state.address.coordinates,
                        [action.payload.field]: action.payload.value
                    }
                },
                error: ''
            };
        case 'ADD_COURSE':
            return {
                ...state,
                courses_offered: [...state.courses_offered, action.payload],
                error: ''
            };
        case 'reset':
            return initialState;
        default:
            return {
                ...state,
                error: 'invalid action type'
            };
    }
}


const CollegeFormData = () => {
    const [state, dispatch] = useReducer(complexReducer, initialState);
    const [courseInput, setCourseInput] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        dispatch({ type: 'reset' });
        setSubmitted(false);
        setCourseInput('');
    };

    return (
        <div style={{ padding: '2rem', width: "350px", margin: "auto", fontFamily: 'Arial' }}>
            <h2>College Form (useReducer)</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <input placeholder="College Name" value={state.name} onChange={(e) => dispatch({ type: 'SET_FIELD', payload: { field: 'name', value: e.target.value } })} />
                <input placeholder="Establishment Year" value={state.establishment_year} onChange={(e) => dispatch({ type: 'SET_FIELD', payload: { field: 'establishment_year', value: e.target.value } })} />
                <input placeholder="Building" value={state.address.building} onChange={(e) => dispatch({ type: 'SET_NESTED_FIELD', payload: { field: 'building', value: e.target.value } })} />
                <input placeholder="Street" value={state.address.street} onChange={(e) => dispatch({ type: 'SET_NESTED_FIELD', payload: { field: 'street', value: e.target.value } })} />
                <input placeholder="City" value={state.address.city.name} onChange={(e) => dispatch({ type: 'SET_CITY_FIELD', payload: { field: 'name', value: e.target.value } })} />
                <input placeholder="Pincode" value={state.address.city.locality.pinCode} onChange={(e) => dispatch({ type: 'SET_LOCALITY_FIELD', payload: { field: 'pinCode', value: e.target.value } })} />
                <input placeholder="Landmark" value={state.address.city.locality.landmark} onChange={(e) => dispatch({ type: 'SET_LOCALITY_FIELD', payload: { field: 'landmark', value: e.target.value } })} />
                <input placeholder="State" value={state.address.state} onChange={(e) => dispatch({ type: 'SET_NESTED_FIELD', payload: { field: 'state', value: e.target.value } })} />
                <input placeholder="Latitude" value={state.address.coordinates.latitude} onChange={(e) => dispatch({ type: 'SET_COORDINATES', payload: { field: 'latitude', value: e.target.value } })} />
                <input placeholder="Longitude" value={state.address.coordinates.longitude} onChange={(e) => dispatch({ type: 'SET_COORDINATES', payload: { field: 'longitude', value: e.target.value } })} />
                <input placeholder="Add Course" value={courseInput} onChange={(e) => setCourseInput(e.target.value)} />
                <button type="button" onClick={() => {
                    if (courseInput.trim()) {
                        dispatch({ type: 'ADD_COURSE', payload: courseInput.trim() });
                        setCourseInput('');
                    }
                }}>Add Course</button>

                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>

            {state.error && <div style={{ color: 'red', marginTop: '1rem' }}>{state.error}</div>}

            {submitted && (
                <div style={{ marginTop: '2rem' }}>
                    <h3>College Data</h3>
                    <pre>{JSON.stringify(state, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default CollegeFormData;