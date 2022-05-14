# Rob Garcia
# This script was created to predict the amount of honey produced in the year 2050.  
# This is accomplished by creating a linear regression model of our sample data using the scikit-learn library.
# A NumPy array is created to hold predicted honey production amounts using the new model

import codecademylib3_seaborn
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn import linear_model

#import honey production data
df = pd.read_csv("https://content.codecademy.com/programs/data-science-path/linear_regression/honeyproduction.csv")

#print(df.head())

prod_per_year = df.groupby('year').totalprod.mean().reset_index()
#print(prod_per_year)

X = prod_per_year["year"]
X = X.values.reshape(-1,1)

y = prod_per_year['totalprod']
plt.scatter(X,y)
#plt.show()

#create a liner regresseon model from scikit-learn
regr = linear_model.LinearRegression()
regr.fit(X,y)

m = regr.coef_[0]
b = regr.intercept_
print(m, b)

y_predict = regr.predict(X)
plt.plot(X,y_predict)
plt.show()

# We want to predict the production of honey in the year 2050
start_year = 2013
end_year = 2051
# create our own data set of x values
X_future = np.array(range(start_year, end_year))
X_future = X_future.reshape(-1, 1)

# create a list of our prediced production using our linear regression model
future_predict = regr.predict(X_future)
plt.plot(X_future, future_predict)
plt.show()


