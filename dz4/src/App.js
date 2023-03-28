import React, { useState } from 'react';
import react from './App.css'

function UserRegistrationForm() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthYear, setBirthYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Данные пользователя: ${fullName}, ${phoneNumber}, ${birthYear}`);
        console.log(`Данные пользователя: ${fullName}, ${phoneNumber}, ${birthYear}`);
    };

    return (
        <div>
            <h2>Регистрация пользователя</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="full-name">ФИО:</label>
                <input
                    type="text"
                    id="full-name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                />

                <label htmlFor="phone-number">Номер телефона:</label>
                <input
                    type="tel"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    required
                />

                <label htmlFor="birth-year">Год рождения:</label>
                <input
                    type="number"
                    id="birth-year"
                    value={birthYear}
                    onChange={(event) => setBirthYear(event.target.value)}
                    required
                />

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}

export default UserRegistrationForm;