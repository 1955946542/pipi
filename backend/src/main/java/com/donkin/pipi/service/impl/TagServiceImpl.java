package com.donkin.pipi.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.donkin.pipi.service.TagService;
import com.donkin.pipi.model.domain.Tag;
import com.donkin.pipi.mapper.TagMapper;
import org.springframework.stereotype.Service;

/**
* @author DELL
* @description 针对表【tag(标签)】的数据库操作Service实现
* @createDate 2024-12-11 13:23:21
*/
@Service
public class TagServiceImpl extends ServiceImpl<TagMapper, Tag> implements TagService {

}




