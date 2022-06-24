# CureDaoUnifiedHealthApi.StudyText

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**averageEffectFollowingHighCauseExplanation** | **String** | Ex: Overall Mood is 3.55/5 (15% higher) on average after days with around 4.19/5 Sleep Quality | [optional] 
**averageEffectFollowingLowCauseExplanation** | **String** | Ex: Overall Mood is 2.65/5 (14% lower) on average after days with around 1.97/5 Sleep Quality | [optional] 
**valuePredictingHighOutcomeExplanation** | **String** | Ex: Overall Mood, on average, 17% higher after around 4.14/5 Sleep Quality | [optional] 
**valuePredictingLowOutcomeExplanation** | **String** | Ex: Overall Mood, on average, 11% lower after around 3.03/5 Sleep Quality | [optional] 
**dataAnalysis** | **String** | Ex: It was assumed that 0 hours would pass before a change in Very Distracting Time would produce an observable change in Video Activities.  It was assumed that Very Distracting Time could produce an observable change in Video Activities for as much as 7 days after the stimulus event. | [optional] 
**dataSources** | **String** | Ex: Very Distracting Time data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.&lt;br&gt;Video Activities data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs. | [optional] 
**dataSourcesParagraphForCause** | **String** | Ex: Very Distracting Time data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.&lt;br&gt;Video Activities data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs. | [optional] 
**dataSourcesParagraphForEffect** | **String** | Ex: Very Distracting Time data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs.&lt;br&gt;Video Activities data was primarily collected using &lt;a href&#x3D;\&quot;https://www.rescuetime.com/rp/curedao/plans\&quot;&gt;RescueTime&lt;/a&gt;. Detailed reports show which applications and websites you spent time on. Activities are automatically grouped into pre-defined categories with built-in productivity scores covering thousands of websites and applications. You can customize categories and productivity scores to meet your needs. | [optional] 
**lastCauseDailyValueSentenceExtended** | **String** | Ex: Sleep Quality Predicts Higher Overall Mood | [optional] 
**lastCauseAndOptimalValueSentence** | **String** | Ex: Sleep Quality Predicts Higher Overall Mood | [optional] 
**lastCauseDailyValueSentence** | **String** | Ex: Sleep Quality Predicts Higher Overall Mood | [optional] 
**optimalDailyValueSentence** | **String** | Ex: Sleep Quality Predicts Higher Overall Mood | [optional] 
**participantInstructions** | **String** | Instructions for study participation | [optional] 
**predictorExplanation** | **String** | Ex: Sleep Quality Predicts Higher Overall Mood | [optional] 
**significanceExplanation** | **String** | Ex: Using a two-tailed t-test with alpha &#x3D; 0.05, it was determined that the change in Video Activities is statistically significant at 95% confidence interval. | [optional] 
**studyAbstract** | **String** | Ex: Aggregated data from 21 suggests with a low degree of confidence (p&#x3D;0.097) that Very Distracting Time has a moderately positive predictive relationship (R&#x3D;0.354) with Video Activities  (Activity).  The highest quartile of Video Activities measurements were observed following an average 2.03h Very Distracting Timeper day.  The lowest quartile of Video Activities  measurements were observed following an average 1.04h Very Distracting Timeper day. | 
**studyDesign** | **String** | Ex: This study is based on data donated by  21 CureDAO users. Thus, the study design is equivalent to the aggregation of 21 separate n&#x3D;1 observational natural experiments. | 
**studyLimitations** | **String** | Ex: As with any human experiment, it was impossible to control for all potentially confounding variables.             Correlation does not necessarily imply correlation.  We can never know for sure if one factor is definitely the cause of an outcome.             However, lack of correlation definitely implies the lack of a causal relationship.  Hence, we can with great             confidence rule out non-existent relationships. For instance, if we discover no relationship between mood             and an antidepressant this information is just as or even more valuable than the discovery that there is a relationship.             &lt;br&gt;             &lt;br&gt;             We can also take advantage of several characteristics of time series data from many subjects  to infer the likelihood of a causal relationship if we do find a correlational relationship.             The criteria for causation are a group of minimal conditions necessary to provide adequate evidence of a causal relationship between an incidence and a possible consequence.             The list of the criteria is as follows:             &lt;br&gt;             1. Strength (effect size): A small association does not mean that there is not a causal effect, though the larger the association, the more likely that it is causal.             &lt;br&gt;             2. Consistency (reproducibility): Consistent findings observed by different persons in different places with different samples strengthens the likelihood of an effect.             &lt;br&gt;             3. Specificity: Causation is likely if a very specific population at a specific site and disease with no other likely explanation. The more specific an association between a factor and an effect is, the bigger the probability of a causal relationship.             &lt;br&gt;             4. Temporality: The effect has to occur after the cause (and if there is an expected delay between the cause and expected effect, then the effect must occur after that delay).             &lt;br&gt;             5. Biological gradient: Greater exposure should generally lead to greater incidence of the effect. However, in some cases, the mere presence of the factor can trigger the effect. In other cases, an inverse proportion is observed: greater exposure leads to lower incidence.             &lt;br&gt;             6. Plausibility: A plausible mechanism between cause and effect is helpful.             &lt;br&gt;             7. Coherence: Coherence between epidemiological and laboratory findings increases the likelihood of an effect.             &lt;br&gt;             8. Experiment: \&quot;Occasionally it is possible to appeal to experimental evidence\&quot;.             &lt;br&gt;             9. Analogy: The effect of similar factors may be considered.             &lt;br&gt;             &lt;br&gt;              The confidence in a causal relationship is bolstered by the fact that time-precedence was taken into account in all calculations. Furthermore, in accordance with the law of large numbers (LLN), the predictive power and accuracy of these results will continually grow over time.  146 paired data points were used in this analysis.   Assuming that the relationship is merely coincidental, as the participant independently modifies their Very Distracting Time values, the observed strength of the relationship will decline until it is below the threshold of significance.  To it another way, in the case that we do find a spurious correlation, suggesting that banana intake improves mood for instance,             one will likely increase their banana intake.  Due to the fact that this correlation is spurious, it is unlikely             that you will see a continued and persistent corresponding increase in mood.  So over time, the spurious correlation will             naturally dissipate.Furthermore, it will be very enlightening to aggregate this data with the data from other participants  with similar genetic, diseasomic, environmentomic, and demographic profiles. | 
**studyObjective** | **String** | Ex: The objective of this study is to determine the nature of the relationship (if any) between the Very Distracting Time and the Video Activities. Additionally, we attempt to determine the Very Distracting Time values most likely to produce optimal Video Activities values. | 
**studyResults** | **String** | Ex: This analysis suggests that higher Very Distracting Time generally predicts negative Video Activities (p &#x3D; 0.097). Video Activities is, on average, 36%  higher after around 2.03 Very Distracting Time.  After an onset delay of 168 hours, Video Activities is, on average, 16%  lower than its average over the 168 hours following around 1.04 Very Distracting Time.  146 data points were used in this analysis.  The value for Very Distracting Time changed 2984 times, effectively running 1492 separate natural experiments. The top quartile outcome values are preceded by an average 2.03 h of Very Distracting Time.  The bottom quartile outcome values are preceded by an average 1.04 h of Very Distracting Time.  Forward Pearson Correlation Coefficient was 0.354 (p&#x3D;0.097, 95% CI -0.437 to 1.144 onset delay &#x3D; 0 hours, duration of action &#x3D; 168 hours) .  The Reverse Pearson Correlation Coefficient was 0.208 (P&#x3D;0.097, 95% CI -0.583 to 0.998, onset delay &#x3D; -0 hours, duration of action &#x3D; -168 hours). When the Very Distracting Time value is closer to 2.03 h than 1.04 h, the Video Activities value which follows is, on average, 36% percent higher than its typical value.  When the Very Distracting Time value is closer to 1.04 h than 2.03 h, the Video Activities value which follows is 0% lower than its typical value.  Video Activities is 5 h (67% higher) on average after days with around 5 h Very Distracting Time | 
**studyTitle** | **String** | Ex: N1 Study: Very Distracting Time Predicts Negative Video Activities | 
**studyInvitation** | **String** | Help us determine if Remeron affects Overall Mood! | [optional] 
**studyQuestion** | **String** | Does Remeron affect Overall Mood? | [optional] 
**studyBackground** | **String** | In order to reduce suffering through the advancement of human knowledge... | [optional] 

