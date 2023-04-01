# DiabetestApp
DiabetestWebApp is my Thesis Proposal requirements for Bachelor Degree in Computer Science. DiabeTest is a free app that helps you detect the Type II Diabetest Mellitus Disease
using Machine Learning and provides with better results.

# HomePage
![image](https://user-images.githubusercontent.com/80078725/229262603-c4f98c19-5c5d-4419-89a0-d11d51429cba.png)

# Technology Used
* CSS3, HTML5, Javascript, ReactJS, Python and Flask.


# AboutPage
![image](https://user-images.githubusercontent.com/80078725/229262658-c05b69f9-b0dc-49c2-8f3b-d06b820b19f7.png)

# How It Works?
![image](https://user-images.githubusercontent.com/80078725/229262676-7a027366-afce-4711-920a-8689a2133122.png)

# TestPage
![image](https://user-images.githubusercontent.com/80078725/229262704-ca44c191-b7ec-4a56-976e-60898057d469.png)

# Attributes
![image](https://user-images.githubusercontent.com/80078725/229262723-2a66abed-57d9-4bbf-ac5e-5286c8c36de9.png)

![image](https://user-images.githubusercontent.com/80078725/229262749-86c5a9ee-515f-412c-96b3-8cd81691943d.png)

![image](https://user-images.githubusercontent.com/80078725/229262758-892d2b80-b903-470f-9eef-a94b57049722.png)

![image](https://user-images.githubusercontent.com/80078725/229262771-0e91324d-1b66-495b-8a64-aca402e9ea64.png)

# PredictionPage
![image](https://user-images.githubusercontent.com/80078725/229262784-f32f337f-ae83-42d8-a679-4c68d96dcbcc.png)

![image](https://user-images.githubusercontent.com/80078725/229262800-64345857-310a-475c-aaa7-f0816010ef0d.png)



# Result And Discussion
## Confusion Matrix - The confusion matrix is used by data scientists to summarize the results of classification problems. 
In this case, it is used to classify whether the user has a high risk or low risk of having type II diabetes. It is also used to predict the number of correct and incorrect predictions of the classification model. 
Among all the models created the Gradient boosting model garnered the highest True Positive Score. It predicted that 65.38% of the entries in the dataset are positive or at high risk of type II diabetes and it is true based on the predicted and actual values. 
Gradient boosting also got the highest True negative score. It predicted that 32.69% of entries in the dataset are negative or at low risk of having type II diabetes. The Gradient boosting algorithm only has 1 false positive prediction. 
It is also the lowest among all models. It only has 2 false negative predictions which are also the lowest among the others. In terms of confusion matrix evaluation, the Gradient Boosting algorithm outperforms all the algorithms tested. 
![image](https://user-images.githubusercontent.com/80078725/229262877-000a8ebf-4d0c-442e-b4c2-b31f23aa0d17.png)

## Accuracy of Tested Algorithms
![image](https://user-images.githubusercontent.com/80078725/229262972-09a42080-80b8-4f42-9d21-ab65cd59df0f.png)


# Summary
        The researchers utilized Gradient Boosting Algorithm for predicting the type II diabetes mellitus disease. The data that were used as datasets were acquired from Sylhet Diabetes Hospital Datasets. The software first accepts the user’s input of health data such as age, sex, polyuria, polydipsia, sudden weight loss, weakness, polyphagia, genital thrush, visual blurring, itching, irritability, delayed healing, partial paresis, muscle stiffness, alopecia, and obesity. Once the user fills in all the required fields, the data collected will proceed for data preprocessing in which Label Encoder will take place by converting each value into numeric form to be read easily by the machine. To continue, the numeric data performed the standard scaler to convert the statistical distribution of data with a zero mean (0) and standard deviation of one (1). In predicting the type II diabetes mellitus disease based on the user health data, the Gradient Boosting Algorithm was utilized and optimized. The software displayed the user’s risk of having type II diabetes mellitus disease. If the software does not detect type II diabetes mellitus disease the software will show and determine it as a ‘Low Risk’. While on the other hand, if a type II diabetes mellitus disease is detected, the software will display the ‘High Risk’. To validate the software’s performance, Diagnostic Testing was used. The researchers calculated the Sensitivity, Specificity, and Accuracy of the software in both the dataset and respondents’ data. The software’s overall accuracy falls at 98.08% using the dataset and 93.33% in terms of respondents’ data. The software underwent an evaluation phase using the ISO 25010 standard, where the respondent evaluated the performance of the system with the use of purposive sampling methods. The result of the evaluation shows that the system conforms to the international quality standards of ISO 25010 with an overall mean of 4.57 which implies that the respondents agreed that the system has functional suitability, performance, efficiency, portability, compatibility, maintainability, usability, reliability, and security features.
