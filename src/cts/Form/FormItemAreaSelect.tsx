import React, { useEffect, useState } from "react";
import { Form, FormInstance, Select } from "antd";
import {
  getCityTakeProvinceArr,
  getCountyTakeCityArr,
  getProvinceArr,
} from "biz/area/logic";
import { getAreaDataService } from "biz/area/service";
import SearchForm from "cts/SearchForm";

const { Option } = Select;

interface FormItemAreaSelectProps {
  label?: string[];
  name?: string[];
  form: FormInstance;
}

/**
 * @name ActionArea联动选择省市区（用在页面表头查询,自适应）
 * @param form 必传
 * @param label 默认["省", "市", "区"]
 * @param name 默认["province", "city", "district"]
 * @returns
 */
export function FormItemAreaSelect(props: FormItemAreaSelectProps) {
  const {
    label = ["省", "市", "区"],
    name = ["province", "city", "district"],
    form,
  } = props;

  // 省列表
  const [provinceArr, setProvinceArr] = useState<StrMap[]>([]);
  // 市列表
  const [cityArr, setCityArr] = useState<StrMap[]>([]);
  // 区列表
  const [districtArr, setDistrictArr] = useState<StrMap[]>([]);

  const [disCity, setDisCity] = useState(true);
  const [disDistrict, setDistrict] = useState(true);

  const init = async () => {
    await getAreaDataService();
    setProvinceArr(() => getProvinceArr());
  };

  useEffect(() => {
    init();
    return () => {
      //   cleanup
    };
  }, []);

  return (
    <>
      <SearchForm.Col>
        <Form.Item label={label[0]} name={name[0]}>
          <Select
            placeholder="请选择省"
            onChange={(val: string) => {
              setCityArr(() => getCityTakeProvinceArr(val));
              setDisCity(false);
              setDistrict(true);
              form.resetFields([`${name[1]}`, `${name[2]}`]);
            }}
          >
            {provinceArr.map((el) => (
              <Option key={el.value} value={el.value}>
                {el.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </SearchForm.Col>
      <SearchForm.Col>
        <Form.Item label={label[1]} name={name[1]} initialValue={undefined}>
          <Select
            placeholder="请选择市"
            disabled={disCity}
            onChange={(val: string) => {
              setDistrictArr(() => getCountyTakeCityArr(val));
              setDistrict(false);
              form.resetFields([`${name[2]}`]);
            }}
          >
            {cityArr.map((el) => (
              <Option key={el.value} value={el.value}>
                {el.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </SearchForm.Col>
      <SearchForm.Col>
        <Form.Item label={label[2]} name={name[2]} initialValue={undefined}>
          <Select disabled={disDistrict} placeholder="请选择区">
            {districtArr.map((el) => (
              <Option key={el.value} value={el.value}>
                {el.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </SearchForm.Col>
    </>
  );
}
