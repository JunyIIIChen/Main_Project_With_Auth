using System;

namespace Main_Project_With_Auth.Models
{
    public class QuestionAnswer
    {
        public QuestionAnswer()
        {
        }

        // 添加 Solar 属性，表示是否使用太阳能
        public bool Solar { get; set; }

        // 添加 TypeOfCoolingHeating 属性，表示冷暖系统的类型
        public string TypeOfCoolingHeating { get; set; }
    }
}
