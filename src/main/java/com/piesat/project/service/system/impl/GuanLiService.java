package com.piesat.project.service.system.impl;

import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.piesat.project.entity.GuanLiBean;
import com.piesat.project.mapper.GuanLiMapper;
import com.piesat.project.service.IGuanLiService;

import org.springframework.stereotype.Service;

@Service
public class GuanLiService extends ServiceImpl<GuanLiMapper, GuanLiBean> implements IGuanLiService {
}
