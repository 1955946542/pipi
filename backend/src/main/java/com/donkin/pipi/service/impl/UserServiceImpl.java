package com.donkin.pipi.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.donkin.pipi.service.UserService;
import com.donkin.pipi.model.domain.User;
import com.donkin.pipi.mapper.UserMapper;
import org.springframework.stereotype.Service;

/**
* @author DELL
* @description 针对表【user(用户)】的数据库操作Service实现
* @createDate 2024-12-11 13:23:56
*/

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}




