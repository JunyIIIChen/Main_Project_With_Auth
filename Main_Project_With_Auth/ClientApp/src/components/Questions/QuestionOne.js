import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from 'react';
import AppContext from '../AppContext';
import axios from 'axios';


const QuestionOne = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/QuestionTwo");
        //console.log(test1);

        // 使用axios发送GET请求
        axios.post('/api/QuestionController', test1)
            .then(response => {
                // 处理返回的数据
                console.log(response.data);
            })
            .catch(error => {
                // 处理错误
                console.error('Error:', error);
            });

    }

    const test1 = "somevalue";

    return (

        <AppContext.Provider value={test1 }>
        <div>
            <h1>Question One</h1>
            <p>Do you use any solar energy sources?</p>
            <div>
                <input type="radio" id="yes" name="solarEnergy" value="yes" />
                <label htmlFor="yes">Yes</label>
            </div>
            <div>
                <input type="radio" id="no" name="solarEnergy" value="no" />
                <label htmlFor="no">No</label>
            </div>

            <div>
                <button onClick={handleNext}>Next Question</button>
            </div>
        </div>
        </AppContext.Provider>
    );
};

export default QuestionOne;
