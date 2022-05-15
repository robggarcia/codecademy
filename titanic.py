# Rob Garcia
# Codecademy - Predict Titanic Survival
# this program uses a Logistic Regression model to predict which passengers survived the Titanic
# based on features such as age and class

import codecademylib3_seaborn
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# Load the passenger data
passengers = pd.read_csv('passengers.csv')
#print(passengers)

# Update sex column to numerical
passengers['Sex'].replace('female', 1, inplace=True)
passengers['Sex'].replace('male', 0, inplace=True)
#print(passengers['Sex'])

# Fill the nan values in the age column
mean_age = round(passengers['Age'].mean(),1)
#print(mean_age)
passengers['Age'].fillna(mean_age, inplace=True)

# Create a first class column
first_class = []
for pclass in passengers['Pclass']:
  if pclass == 1:
    first_class.append(1)
  else:
    first_class.append(0)
passengers['FirstClass'] = first_class

# Create a second class column
second_class = []
for pclass in passengers['Pclass']:
  if pclass == 2:
    second_class.append(1)
  else:
    second_class.append(0)
passengers['SecondClass'] = second_class
#print(passengers)

# Select the desired features
features = passengers[['Sex', 'Age', 'FirstClass', 'SecondClass']]
survival = passengers['Survived']

# Perform train, test, split
X_train, X_test, y_train, y_test = train_test_split(features, survival, test_size = 0.2)

# Scale the feature data so it has mean = 0 and standard deviation = 1
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Create and train the model
model = LogisticRegression()
model.fit(X_train, y_train)

# Score the model on the train data
train_score = model.score(X_train, y_train)
print('Model training score: ', train_score)

# Score the model on the test data
test_score = model.score(X_test, y_test)
print('Model test score: ', test_score)

# Analyze the coefficients
print('Sex, Age, First Class, Second Class')
print(model.coef_)

# Sample passenger features
Jack = np.array([0.0,20.0,0.0,0.0])
Rose = np.array([1.0,17.0,1.0,0.0])
You = np.array([0.0,39.0,0.0,2.0])

# Combine passenger arrays
sample_passengers = np.array([Jack, Rose, You])

# Scale the sample passenger features
sample_passengers = scaler.transform(sample_passengers)
print(sample_passengers)

# Make survival predictions!
surviving = model.predict(sample_passengers)
print(surviving)
surviving_probability = model.predict_proba(sample_passengers)
print(surviving_probability)
