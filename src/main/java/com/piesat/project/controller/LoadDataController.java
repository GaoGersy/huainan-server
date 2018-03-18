package com.piesat.project.controller;

import com.piesat.project.common.Result;
import com.piesat.project.common.controller.BaseController;
import com.piesat.project.common.utils.SuperLogger;
import com.piesat.project.common.utils.okhttp.OkHttpUtils;
import com.piesat.project.entity.GuanLiBean;
import com.piesat.project.entity.ListDataBean;
import com.piesat.project.service.IGuanLiService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@ResponseBody
public class LoadDataController extends BaseController {

    String url = "http://sindar.huainanhai.com/knack/list_today?phone_sn=";

    @Autowired
    IGuanLiService mGuanLiService;

    long num = 100000000L;

    @RequestMapping(value = "syncData")
    public Result syncData() {
        while (num < 10000000000L) {
            OkHttpUtils.get(url + (num++), new OkHttpUtils.ResultCallback() {
                @Override
                public void onSuccess(String result) {
                    ListDataBean listDataBean = toBean(result, ListDataBean.class);
                    List<GuanLiBean> list = listDataBean.getData().getList();
                    SuperLogger.e(list);
                    for (GuanLiBean guanLiBean : list) {
                        GuanLiBean bean = mGuanLiService.selectById(guanLiBean.getFeed_id());
                        if (bean==null) {
                            SuperLogger.e("准备入库了");
                            mGuanLiService.insert(guanLiBean);
                        }else {
                            SuperLogger.e("已经入库了");
                        }
                    }
                }

                @Override
                public void onFailure(Exception e) {
                    SuperLogger.e(e);
                }
            });
        }
        return Result.success("同步成功");
    }
}
