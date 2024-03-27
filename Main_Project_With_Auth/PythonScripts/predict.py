# predict.py
import sys
import json

def predict(water, electricity, gas):
    # 在这里执行你的模型预测
    # 这里用一些固定的值来模拟
    co2_emission = float(water) * 0.1 + float(electricity) * 0.2 + float(gas) * 0.3
    trees_saved = co2_emission / 2  # 假设计算逻辑
    return co2_emission, trees_saved

if __name__ == '__main__':
    water = sys.argv[1]
    electricity = sys.argv[2]
    gas = sys.argv[3]
    
    co2_emission, trees_saved = predict(water, electricity, gas)
    
    # 将结果打印到标准输出
    print(json.dumps({'co2Emission': co2_emission, 'treesSaved': trees_saved}))
